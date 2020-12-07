import styled from "styled-components";
import { Link } from "gatsby";

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  place-content: start;
`;

export const StyledSideBar = styled.div`
  #leftbar-wrapper {
    position: sticky;
    top: 4rem;
    height: calc(100vh - 4rem);
    background-color: #f7f7f7;
    border-right: 1px solid #ececec;
    .sidebar-heading {
      padding: 0.875rem 1.25rem;
      // padding-left: 0px;
      text-align: center;
      font-size: 1.2rem;
    }
    .active {
      background-color: #ffe599;
      border-color: #ffe599;
      color: #434343;
    }
  }
`;

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: #ccc;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledContentWrapperLeft = styled(StyledContentCenterWrapper)`
  max-width: 960px;
  margin: auto 53% auto auto;
`;

export const StyledUnitBannerWrapper = styled(StyledContentCenterWrapper)`
  margin: 3%;
  color: #343a40;
  // height: 100%;
  display: block;
  // position: fixed;
  p {
    font-size: 24px;
  }
  .sticky {
    position: sticky;
    top: 0;
    width: 100%;
  }
`;

export const StyledSectionWrapper = styled(StyledContentCenterWrapper)`
  height: 400px;
  display: block;
`;

export const StyledImageWrapper = styled.div`
  div {
    overflow: unset !important;
    margin: 0;
    width: 100%;
    img {
      border-radius: 15px;
    }
    max-width: ${props => props.maxWidth || 200}px;
    margin: 1rem auto 1.45rem;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.15));
    :hover {
      transform: scale(1.2);
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
      cursor: pointer;
    }
  }
`;

export const StyledLink = styled(Link)`
  margin-left: 0.32rem;
`;

export const StyledNextSection = styled.div`
  margin: 2rem auto 1rem auto;
  // margin-top: 2rem;
  text-align: center;
`;
