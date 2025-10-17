<?php

/**
 * Configuration overrides for WP_ENV === 'staging'
 */

use Roots\WPConfig\Config;

use function Env\env;

/**
 * You should try to keep staging as close to production as possible. However,
 * should you need to, you can always override production configuration values
 * with `Config::define`.
 *
 * Example: `Config::define('WP_DEBUG', true);`
 * Example: `Config::define('DISALLOW_FILE_MODS', false);`
 */

Config::define('DISALLOW_INDEXING', true);

/**
 * Error Logging Configuration for Staging
 * Enable error logging to file but disable display for security
 */
Config::define('WP_DEBUG', true);
Config::define('WP_DEBUG_DISPLAY', false);
Config::define('WP_DEBUG_LOG', true);
Config::define('SCRIPT_DEBUG', false);

// Set PHP error reporting and logging
ini_set('display_errors', '0');
ini_set('log_errors', '1');

// Optional: Set custom log file path (defaults to wp-content/debug.log if not set)
if (env('WP_DEBUG_LOG_FILE')) {
    ini_set('error_log', env('WP_DEBUG_LOG_FILE'));
}
