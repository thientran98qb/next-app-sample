import { requiredAuthentication } from '../../utils/requiredAuthentication';
import ProfileController from './profile.container'

export async function getServerSideProps(context: any) {
  return requiredAuthentication(context, ({session}: any) => {
    return {
      props: {
        session
      }
    }
  })
}

export default ProfileController
