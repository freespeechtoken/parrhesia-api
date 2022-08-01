export interface AppConfig {
  storage: {
    host: string;
    username: string;
    password: string;
    bucketName: string;
  };

  mongodb: {
    uri: string;
  };
}

export default (): AppConfig => ({
  storage: {
    host: process.env.S3__HOST,
    username: process.env.S3__USERNAME,
    password: process.env.S3__PASSWORD,
    bucketName: process.env.S3__BUCKET_NAME,
  },

  mongodb: {
    uri: process.env.MONGODB__URI
  },
});
