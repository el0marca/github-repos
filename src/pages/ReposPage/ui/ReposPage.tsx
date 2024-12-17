import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { fetchRepositories } from "@/entities/repository";
import ReposTable from "@/shared/ui/ReposTable/ReposTable";

const Loading = styled.div`
  font-size: 16px;
  color: #333;
  text-align: center;
  padding: 20px;
`;

const Error = styled.div`
  font-size: 16px;
  color: #ff0000;
  text-align: center;
  padding: 20px;
`;

const Container = styled.div`
  padding: 20px;
`;

const ReposPage: React.FC = () => {
  const { org } = useParams<{ org: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.search);
  const { currentPage } = useAppSelector((state) => state.repository);

  useEffect(() => {
    if (org) {
      dispatch(fetchRepositories({ org, page: currentPage }))
        .unwrap()
        .catch(() => {
          navigate("/");
        });
    }
  }, [org, currentPage, dispatch, navigate]);

  if (loading) {
    return <Loading>Загрузка...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <Container>
      <ReposTable />
    </Container>
  );
};

export default ReposPage;
