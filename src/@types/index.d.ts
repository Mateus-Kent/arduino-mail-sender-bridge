declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MAIL_SERVER: string
      MAIL_PORT: number
      MAIL_USER: string
      MAIL_PASSWORD: string
    }
  }
}

export {}
