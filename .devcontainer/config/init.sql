-- MySQL initialization script for WordPress Bedrock
-- This script runs when the MySQL container starts for the first time

-- Ensure the app database exists
CREATE DATABASE IF NOT EXISTS `app` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Grant all privileges to app user
GRANT ALL PRIVILEGES ON `app`.* TO 'app'@'%';
FLUSH PRIVILEGES;

-- Optional: Create additional databases for testing/staging
CREATE DATABASE IF NOT EXISTS `app_test` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON `app_test`.* TO 'app'@'%';

FLUSH PRIVILEGES;
