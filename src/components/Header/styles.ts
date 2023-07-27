import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray_700};
  height: 178px;
`

export const LogoImage = styled.Image`
  width: 110px;
  height: 32px;
`
