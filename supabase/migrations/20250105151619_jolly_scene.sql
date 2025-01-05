/*
  # Add logging to new user trigger

  1. Changes
    - Add logging to handle_new_user function to debug profile creation
*/

-- Update function to include logging
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Log the new user data
  RAISE LOG 'Creating profile for user: %', new.id;
  
  INSERT INTO public.profiles (id, username, avatar_url)
  VALUES (
    new.id,
    new.email,
    'https://api.dicebear.com/7.x/avatars/svg?seed=' || new.id
  );
  
  RAISE LOG 'Profile created successfully for user: %', new.id;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;