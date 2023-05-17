import { Comment } from '@/components/comment-component/comment';
import { commentsData } from './comments-data';
import { UiSection } from '@/ui-elements/ui-section/ui-section';
import { UiSectionTitle } from '@/ui-elements/ui-section-title/ui-section-title';
import { AccentColor, UiAccent } from '@/ui-elements/ui-accent/ui-accent';
import './comments-list.scss';

export const CommentsList = () => (
  <UiSection className={'comments-list'}>
    <UiSectionTitle>
      <UiAccent color={AccentColor.presentation}>Что говорят наши клиенты</UiAccent> о платформе
    </UiSectionTitle>
    <div className="comments-list__list">
      {commentsData.map((CommentData, id) => (
        <Comment key={id} color={id % 2 === 0 ? 'green' : 'blue'}>
          <CommentData />
        </Comment>
      ))}
    </div>
  </UiSection>
);
