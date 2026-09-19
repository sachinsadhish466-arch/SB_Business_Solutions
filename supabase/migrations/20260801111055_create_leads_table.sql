/*
# Create leads table for contact form submissions

## Purpose
Stores inquiries submitted through the website's "Free Consultation / Request Quote"
contact form. The public site has no sign-in screen, so the frontend runs as the
anon role and needs to INSERT leads. Reading, updating, or deleting leads is
restricted to authenticated users (the business owner via the Supabase dashboard).

## New Tables
- `leads`
  - `id`            uuid, primary key
  - `name`          text, not null — submitter's full name
  - `business`      text — business/company name (optional)
  - `phone`         text, not null — contact phone number
  - `email`         text, not null — contact email
  - `service`       text — selected service of interest
  - `budget`        text — selected budget range
  - `message`       text — free-form message
  - `status`        text, default 'new' — lead status for the owner (new/contacted/closed)
  - `created_at`    timestamptz, default now()

## Security
- RLS enabled on `leads`.
- INSERT: `TO anon, authenticated` with `WITH CHECK (true)` — any visitor can
  submit a consultation request through the public form.
- SELECT / UPDATE / DELETE: `TO authenticated` only — only the signed-in owner
  can view or manage submitted leads. The public frontend never reads leads,
  so the anon role does not need read access.

## Important Notes
1. The app has no sign-in screen by design. The only operation the public
   performs is INSERT. Restricting SELECT to authenticated is intentional and
   correct — visitors must not be able to read other visitors' leads.
2. `status` defaults to 'new' so the owner can triage incoming requests.
3. The migration is idempotent: table uses IF NOT EXISTS and policies are
   dropped before re-creating.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text,
  phone text NOT NULL,
  email text NOT NULL,
  service text,
  budget text,
  message text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public can submit leads (contact form)
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated owner can read leads
DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated owner can update lead status
DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads"
  ON leads FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated owner can delete leads
DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads"
  ON leads FOR DELETE
  TO authenticated
  USING (true);

-- Index for sorting leads by newest first
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
