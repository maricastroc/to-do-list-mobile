import theme from '../../../../theme'
import {
  FilterOptionContainer,
  FilterOptionBtn,
  FilterOptionIcon,
  FilterOptionText,
} from './styles'

interface FilterOptionProps {
  label: string
  option: string
  onSelect: () => void
}

export function FilterOption({ label, option, onSelect }: FilterOptionProps) {
  return (
    <FilterOptionContainer>
      <FilterOptionBtn
        onPress={() => onSelect()}
        style={{
          backgroundColor:
            option === label ? theme.colors.blue_500 : theme.colors.gray_500,
        }}
      >
        {option === label && <FilterOptionIcon name="check" />}
      </FilterOptionBtn>
      <FilterOptionText>{label}</FilterOptionText>
    </FilterOptionContainer>
  )
}
