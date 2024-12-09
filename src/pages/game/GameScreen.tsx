import { useSelector } from "react-redux"
import { RootState } from '../../store/store';


const GameScreen = () => {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <div>GameScreen</div>
  )
}

export default GameScreen