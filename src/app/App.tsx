import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import AppRouter from "./providers/router/ui/AppRouter";
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
    <Navbar />
    <AppRouter />
    <button onClick={toggleTheme}>TOGGLE</button>
</div>
  )
}

export default App;