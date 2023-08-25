import ReviewHeader from "./ReviewHeader";
import SummaryCard from "./ReviewSummaryCard";
import DisplayReview from "./DisplayReview";
import ProtectedReview from "./ProtectedReview";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const ReviewsPage = () => {
  const auth = useAuth();
  const Navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    Navigate("/landingpage");
  };
  return (
    <div className="reviewPage">
      <ReviewHeader />
      <SummaryCard />
      <DisplayReview></DisplayReview>
      <ProtectedReview />
      <footer>
        <Button
          type="primary"
          id="logOutBtn"
          className="logOutBtn"
          onClick={handleLogout}
        >
          logout
        </Button>
      </footer>
    </div>
  );
};

export default ReviewsPage;
