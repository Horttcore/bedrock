-- MySQL initialization script for WordPress Bedrock
-- This script runs when the MySQL container starts for the first time

-- Ensure the bedrock database exists
CREATE DATABASE IF NOT EXISTS `bedrock` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Grant all privileges to bedrock user
GRANT ALL PRIVILEGES ON `bedrock`.* TO 'bedrock'@'%';
FLUSH PRIVILEGES;

-- Optional: Create additional databases for testing/staging
CREATE DATABASE IF NOT EXISTS `bedrock_test` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON `bedrock_test`.* TO 'bedrock'@'%';

FLUSH PRIVILEGES;
