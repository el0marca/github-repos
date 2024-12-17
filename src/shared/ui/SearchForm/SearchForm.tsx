import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { searchOrganization } from "@/features/searchOrg";
import { clearError } from "@/features/searchOrg/";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input<{ hasError: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${(props) => (props.hasError ? "#ff0000" : "#ccc")};
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: #ff0000;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0066cc;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
  &:hover:enabled {
    background-color: #0052a3;
  }
`;

const SearchForm: React.FC = () => {
  const [orgName, setOrgName] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.search);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName.trim()) return;

    const success = await dispatch(
      searchOrganization({ org: orgName, page: 1 })
    ).unwrap();
    if (success) {
      navigate(`/repos/${orgName}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrgName(e.target.value);
    if (error) dispatch(clearError());
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={orgName}
        onChange={handleChange}
        placeholder="Введите название организации (например, facebook)"
        hasError={!!error}
        disabled={loading}
      />
      {error && <ErrorText>{error}</ErrorText>}
      <Button type="submit" disabled={loading}>
        {loading ? "Поиск..." : "Найти"}
      </Button>
    </Form>
  );
};

export default SearchForm;
