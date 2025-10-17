FROM dunglas/frankenphp:1-php8.3-alpine

# Install system dependencies
RUN apk add --no-cache \
    bash \
    curl \
    freetype-dev \
    icu-dev \
    jpeg-dev \
    libpng-dev \
    libwebp-dev \
    libzip-dev \
    oniguruma-dev \
    zip \
    unzip

# Install PHP extensions required by WordPress
RUN docker-php-ext-configure gd \
        --with-freetype \
        --with-jpeg \
        --with-webp \
    && docker-php-ext-install -j$(nproc) \
        bcmath \
        exif \
        gd \
        intl \
        mysqli \
        opcache \
        pdo_mysql \
        zip

# Install Redis extension for caching
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS \
    && pecl install redis \
    && docker-php-ext-enable redis \
    && apk del .build-deps

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/local/bin/composer

# Install WP-CLI
COPY --from=wordpress:cli-php8.3 /usr/local/bin/wp /usr/local/bin/wp

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

# Set recommended PHP.ini settings for WordPress
RUN { \
        echo 'opcache.memory_consumption=128'; \
        echo 'opcache.interned_strings_buffer=8'; \
        echo 'opcache.max_accelerated_files=4000'; \
        echo 'opcache.revalidate_freq=2'; \
        echo 'opcache.fast_shutdown=1'; \
        echo 'opcache.enable_cli=1'; \
    } > /usr/local/etc/php/conf.d/opcache-recommended.ini

# Set working directory
WORKDIR /app

# Copy custom PHP configuration
COPY docker/php/php.ini /usr/local/etc/php/conf.d/custom.ini

# Expose ports
EXPOSE 80 443

# Use FrankenPHP's default entrypoint
CMD ["frankenphp", "run"]
