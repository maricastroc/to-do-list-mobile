import { useState } from 'react'
import {
  FilterBarContainer,
  FilterBarWrapper,
  FilterTitle,
  OptionsContainer,
  SearchTaskInput,
} from './styles'
import { FilterOption } from './components/FilterOption'
import theme from '../../theme'

interface FilterBarProps {
  onFilter: (value: string) => void
  onChange: (value: string) => void
}

export function FilterBar({ onFilter, onChange }: FilterBarProps) {
  const [option, setOption] = useState('All')
  const [isFocused, setIsFocused] = useState(false)

  const handleInputFocus = () => {
    setIsFocused(true)
  }

  const handleInputBlur = () => {
    setIsFocused(false)
  }

  return (
    <FilterBarContainer>
      <FilterBarWrapper>
        <FilterTitle>Filter:</FilterTitle>
        <OptionsContainer>
          <FilterOption
            label="All"
            option={option}
            onSelect={() => {
              setOption('All')
              onFilter('all')
            }}
          />
          <FilterOption
            label="To-Do"
            option={option}
            onSelect={() => {
              setOption('To-Do')
              onFilter('to-do')
            }}
          />
          <FilterOption
            label="Done"
            option={option}
            onSelect={() => {
              setOption('Done')
              onFilter('done')
            }}
          />
        </OptionsContainer>
      </FilterBarWrapper>
      <SearchTaskInput
        style={{
          borderColor: isFocused
            ? theme.colors.purple_500
            : theme.colors.gray_700,
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={onChange}
        placeholder="Search Task"
        placeholderTextColor={theme.colors.gray_300}
      />
    </FilterBarContainer>
  )
}
