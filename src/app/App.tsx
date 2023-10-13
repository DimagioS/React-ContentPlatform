import { classNames } from "shared/lib/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { Sidebar } from "widgets/Sidebar";
import AppRouter from "./providers/router/ui/AppRouter";
import './styles/index.scss'

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  )
}

export default App;
