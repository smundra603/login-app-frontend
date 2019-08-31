import * as React from 'react';
// import { Dropdown } from 'semantic-ui-react';
import { JobFilterContainer, RightFiltersContainer, StyledDropdown, LeftFiltersContainer, ClearFilters, TotalJobsView, SortOrder } from './jobFilter.style';

const ContentCategoriesFilters = ['All Content Categories', 'All Content Categories1', 'All Content Categories2'];

const IndustriesFilters = ['All Industries', 'All Industries1', 'All Industries2'];

const StatusFilters = ['Status', 'Status1', 'Status2'];

const JobSortValues = ['Least time left first', 'Sort 1', 'Sort 2'];

const ContentCategoriesOptions = ContentCategoriesFilters.map((filter) => ({
  key: filter,
  text: filter,
  value: filter
}));

const IndustriesOptions = IndustriesFilters.map((filter) => ({
  key: filter,
  text: filter,
  value: filter
}));

const StatusOptions = StatusFilters.map((filter) => ({
  key: filter,
  text: filter,
  value: filter
}));

const JobSortOptions = JobSortValues.map((filter) => ({
  key: filter,
  text: filter,
  value: filter
}));

export default function JobFilters(props) {
  const { from = 0, to = 10, total = 100 } = props;
  return (
    <JobFilterContainer>
      <RightFiltersContainer>
        <StyledDropdown options={ContentCategoriesOptions} defaultValue={ContentCategoriesOptions[0].value} selection style={{ minWidth: '195px' }} />
        <StyledDropdown options={IndustriesOptions} defaultValue={IndustriesOptions[0].value} selection style={{ minWidth: '140px' }} />
        <StyledDropdown options={StatusOptions} defaultValue={StatusOptions[0].value} selection style={{ minWidth: '100px' }} />
        <ClearFilters>Clear all</ClearFilters>
      </RightFiltersContainer>
      <LeftFiltersContainer>
        <TotalJobsView>
          Displaying {from}-{to} of {total} jobs
        </TotalJobsView>
        <SortOrder options={JobSortOptions} defaultValue={JobSortOptions[0].value} selection />
      </LeftFiltersContainer>
    </JobFilterContainer>
  );
}
