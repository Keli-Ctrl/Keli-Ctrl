import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "reviewer";

export const ReviewTitle = (record: TReview): string => {
  return record.reviewer?.toString() || String(record.id);
};
