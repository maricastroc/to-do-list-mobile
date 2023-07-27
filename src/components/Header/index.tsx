import { HeaderContainer, LogoImage } from './styles'
import LogoToDo from '../../assets/images/logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <LogoImage source={LogoToDo} alt="" />
    </HeaderContainer>
  )
}
