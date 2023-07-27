import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_600};
`

export const TasksTitleContainer = styled.View`
  width: 100%;
  margin-top: 33px;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
`

export const TasksTitleContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const TaskTitleItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const TaskTitleText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.font_family.bold};
`

export const TaskTitleCounter = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 24px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.gray_400};
`

export const Counter = styled.Text`
  font-family: ${({ theme }) => theme.font_family.bold};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray_200};
`

export const Separator = styled.View`
  margin: 20px 0;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_400};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray_400};
`

export const FilterContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 28px;
`

export const TasksContainer = styled.View`
  min-width: 100%;
  gap: 16px;
  padding: 0 28px;
`
