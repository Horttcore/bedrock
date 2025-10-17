# Docker Setup for WordPress Bedrock

This Docker setup provides a complete development environment for WordPress Bedrock with modern tools and caching.

## Services Included

- **FrankenPHP** - Modern PHP application server with built-in web server
- **MySQL 8.0** - Database server
- **WP-CLI** - WordPress command line interface
- **Composer** - PHP dependency manager
- **Node.js** - JavaScript runtime for asset compilation
- **Valkey** - Redis-compatible caching server

## Quick Start

1. **Copy environment file**
   ```bash
   cp .env.docker .env
   ```

2. **Generate WordPress salts**
   Visit https://roots.io/salts.html and replace the 'generateme' values in `.env`

3. **Start the services**
   ```bash
   docker-compose up -d
   ```

4. **Install WordPress dependencies**
   ```bash
   docker-compose exec web composer install
   ```

5. **Access your site**
   - Website: http://localhost:9000 (HTTP) or https://localhost:9001 (HTTPS)
   - Database: localhost:3306 (user: bedrock, password: bedrock)
   - Cache: localhost:6379

## Service Management

### Start all services
```bash
docker-compose up -d
```

### Stop all services
```bash
docker-compose down
```

### View logs
```bash
docker-compose logs -f
```

### Restart a specific service
```bash
docker-compose restart web
```

## Using the Tools

### WP-CLI Commands
```bash
# Install WordPress
docker-compose exec web wp core install \
  --url=http://localhost \
  --title="My Site" \
  --admin_user=admin \
  --admin_password=password \
  --admin_email=admin@example.com

# List plugins
docker-compose exec web wp plugin list

# Install a plugin
docker-compose exec web wp plugin install akismet --activate
```

### Composer Commands
```bash
# Install dependencies
docker-compose exec web composer install

# Add a new dependency
docker-compose exec web composer require wpackagist-plugin/wordpress-seo

# Update dependencies
docker-compose exec web composer update
```

### Node.js Commands
```bash
# Install npm dependencies
docker-compose exec web npm install

# Run build scripts
docker-compose exec web npm run build

# Watch for changes
docker-compose exec web npm run watch
```

## Database Management

### Connect to MySQL
```bash
docker-compose exec mysql mysql -u bedrock -pbedrock bedrock
```

### Import database dump
```bash
docker-compose exec -T mysql mysql -u bedrock -pbedrock bedrock < dump.sql
```

### Export database
```bash
docker-compose exec mysql mysqldump -u bedrock -pbedrock bedrock > dump.sql
```

## Cache Management (Valkey)

### Connect to Valkey CLI
```bash
docker-compose exec valkey valkey-cli
```

### Flush cache
```bash
docker-compose exec valkey valkey-cli FLUSHALL
```

### Monitor cache
```bash
docker-compose exec valkey valkey-cli MONITOR
```

## File Structure

```
├── docker/
│   ├── php/
│   │   └── php.ini              # PHP configuration
│   └── mysql/
│       └── init.sql             # MySQL initialization
├── docker-compose.yml           # Docker services configuration
├── .env.docker                  # Docker environment template
└── README-Docker.md            # This file
```

## Configuration Details

### FrankenPHP Configuration
- Runs on ports 80 (HTTP) and 443 (HTTPS)
- Configured with PHP 8.3
- Optimized for WordPress with OPcache enabled
- Sessions stored in Valkey for better performance

### Error Logging Configuration
- **Development**: Errors displayed and logged with spatie/ignition error handler
- **Staging**: Errors logged to `/var/log/php_errors.log` but not displayed to users
- **Production**: Errors logged but not displayed (default WordPress behavior)
- Custom log file path can be set via `WP_DEBUG_LOG_FILE` environment variable

### MySQL Configuration
- Database: `bedrock`
- User: `bedrock`
- Password: `bedrock`
- Character set: utf8mb4_unicode_ci
- Additional test database: `bedrock_test`

### Valkey Configuration
- Port: 6379
- Persistence enabled with AOF
- Used for WordPress object caching and PHP sessions

## Troubleshooting

### Reset everything
```bash
docker-compose down -v
docker-compose up -d
```

### View service status
```bash
docker-compose ps
```

### Execute commands in running containers
```bash
# Access web container shell
docker-compose exec web sh

# Access MySQL container
docker-compose exec mysql bash
```

### Common Issues

1. **Port conflicts**: Change ports in docker-compose.yml if 80, 3306, or 6379 are in use
2. **Permission issues**: Ensure proper file permissions for the web directory
3. **Database connection**: Verify .env file has correct database settings

## Production Considerations

For production use:
1. Change default passwords
2. Use environment-specific .env files
3. Configure SSL certificates
4. Set up proper backup strategies
5. Use Docker secrets for sensitive data
6. Consider using external databases and cache servers

## Additional Resources

- [Bedrock Documentation](https://roots.io/bedrock/docs/)
- [FrankenPHP Documentation](https://frankenphp.dev/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [WordPress CLI Documentation](https://wp-cli.org/)
