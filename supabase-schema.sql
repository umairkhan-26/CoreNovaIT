-- Run this once in the Supabase SQL editor (Project -> SQL Editor)
-- to create the table that stores contact form submissions.

create table contact_submissions (
  id bigint generated always as identity primary key,
  name text not null,
  company text,
  email text not null,
  service text,
  details text not null,
  created_at timestamptz not null default now()
);

-- Row Level Security is on by default for new tables. The API route
-- writes using the service_role key, which bypasses RLS, so no policies
-- are required for this to work — but leave RLS enabled so the table
-- can't be read or written directly from the browser with the anon key.
alter table contact_submissions enable row level security;
