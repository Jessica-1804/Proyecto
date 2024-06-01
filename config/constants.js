import Constants from 'expo-constants';

const expoExtraConfig = Constants.expoConfig?.extra;

export const EXPO_PUBLIC_API_URL = expoExtraConfig.EXPO_PUBLIC_API_URL || 'http://192.168.1.13:3000';
export const EXPO_PUBLIC_SOCKET_URL = expoExtraConfig.EXPO_PUBLIC_SOCKET_URL || 'http://192.168.1.13:8000';
