import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ljvzrfrtnlpbychvpiyi.supabase.co";

const supabaseKey =
  "sb_publishable_DB5PA-3-yqGOisV9QEAHWg_upD8soRM";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);