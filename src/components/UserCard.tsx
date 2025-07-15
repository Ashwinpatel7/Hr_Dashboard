interface UserCardProps {
  user: Employee;
  isBookmarked: boolean;
  onBookmark: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, isBookmarked, onBookmark }) => {