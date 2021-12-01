import { Suspense } from 'react'
import Note from '../../components/Note'

import NoteSkeleton from '../../components/NoteSkeleton'
import Page from '../../components/Page.server'

export default function NotePage({login, selectedId = null, isEditing = false}) {
  // TODO: get login information from request
  login = 'huozhi'

  return (
    <Page login={login}>
      <Suspense fallback={<NoteSkeleton isEditing={isEditing} />}>
        <Note login={login} selectedId={selectedId} isEditing={isEditing} />
      </Suspense>
    </Page>
  )
}
