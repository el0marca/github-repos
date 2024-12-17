import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './ReposPage.module.css'
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks'
import { fetchRepositories } from '@/entities/repository/model/repositoryThunks'
import ReposTable from '@/shared/ui/ReposTable/ReposTable'

const ReposPage: React.FC = () => {
  const { org } = useParams<{ org: string }>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { loading, error } = useAppSelector(state => state.search)
  const { currentOrg, currentPage } = useAppSelector(state => state.repository)

  useEffect(() => {
    if (org) {
      dispatch(fetchRepositories({ org, page: currentPage }))
        .unwrap()
        .catch(() => {
          navigate('/')
        })
    }
  }, [org, currentPage, dispatch, navigate])

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>
  }

  if (error) {
    return <div className={styles.error}>{error}</div>
  }

  return (
    <div className={styles.container}>
      <ReposTable />
    </div>
  )
}

export default ReposPage 