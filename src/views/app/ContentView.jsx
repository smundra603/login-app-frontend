import * as React from 'react';
import {
  JobViewSideLine,
  JobViewContainer,
  JobTitleContainer,
  JobPay,
  JobStatus,
  JobRating,
  JobActionButton,
  JobPayColumn,
  JobStatusColumn,
  JobRatingColumn,
  JobActionColumn,
  JobTitle,
  JobTagsContainer,
  JobTag,
  TagDivder,
  TagContainer,
  RatingIcon
} from './index.style';

function renderJobTitle() {
  return <JobTitle>How to build an e-commerce platform : A step by step guideline. Please check and refer</JobTitle>;
}

const renderTag = (totalTags) => (tag, index) => (
  <TagContainer key={index}>
    <JobTag>{tag}</JobTag>
    {index < totalTags - 1 ? <TagDivder /> : null}
  </TagContainer>
);

function renderJobTags(tags) {
  const totalTags = tags.length;
  return <JobTagsContainer>{tags.map(renderTag(totalTags))}</JobTagsContainer>;
}

function getStatusText(status) {
  switch (status) {
    case 'revision_requested':
      return 'Revision Requested';
    case 'editorial_review':
      return 'Editorial Review';
    case 'deadline_missed':
      return 'Deadline Missed';

    case 'completed':
      return 'Completed';
    default:
      return 'NA';
  }
}
export default function ContentView(props) {
  const {
    title, tags, pay, status, rating
  } = props;
  const action = status === 'revision_requested' ? 'revise' : 'view';
  return (
    <JobViewContainer>
      <JobViewSideLine jobStatus={status} />
      <JobTitleContainer>
        {renderJobTitle(title)}
        {renderJobTags(tags)}
      </JobTitleContainer>
      <JobPayColumn>
        <JobPay>${pay}</JobPay>
      </JobPayColumn>
      <JobStatusColumn>
        <JobStatus jobStatus={status}>{getStatusText(status)}</JobStatus>
      </JobStatusColumn>
      <JobRatingColumn>
        <JobRating>
          <RatingIcon />
          {rating}
        </JobRating>
      </JobRatingColumn>
      <JobActionColumn>
        <JobActionButton action={action}>{action}</JobActionButton>
      </JobActionColumn>
    </JobViewContainer>
  );
}
