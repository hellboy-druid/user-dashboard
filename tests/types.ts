export enum LogLevel {
  DEBUG,
  INFO,
  WARN,
  ERROR,
  FATAL
}

export type LogEvent = {
  timestamp: Date;
  level: LogLevel;
  message: string;
  data?: any;
};

export type User = {
  id: string;
  username: string;
  email: string;
  avatarUrl: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

export type DashboardData = {
  user: User;
  metrics: {
    [key: string]: number;
  };
};