const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    jwtSecret : process.env.JWT_SECRET || "your_secret_key",
    mongoUri: process.env.MONGODB_URI || process.env.MONGODB_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGoDB_PORT || '27017') + '/project'
}

export default config;