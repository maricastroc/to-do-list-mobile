/* eslint-disable camelcase */
import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { Home } from './src/screens/Home'
import theme from './src/theme'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { TasksContextProvider } from './src/contexts/TasksContext'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <TasksContextProvider>
        {fontsLoaded ? <Home /> : <ActivityIndicator />}
      </TasksContextProvider>
    </ThemeProvider>
  )
}
