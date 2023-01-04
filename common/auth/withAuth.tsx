import { GetServerSideProps, NextComponentType, NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import Router from "next/router"
import { Component } from "react";

export default (WrappedComponent: any) => {
  const HocComponent = (props: any) => {
    const session = useSession()
    if (session.status === 'loading') {
      return <>Loadiing</>
    } else {
      return <WrappedComponent {...props} />
    }
  };

  HocComponent.getInitialProps = async (context: any) => {
    try {
      const session = await getSession()

      if (!session) {
        if (context.res) {
          context.res?.writeHead(302, {
            Location: '/login'
          })
          context.res?.end()
        }
        else {
          // window.location.href = '/login'
          Router.push('/login')
        }
      }
      else if (WrappedComponent.getInitialProps) {
        const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: session })

        return { ...wrappedProps, session }
      }
      return {
        props: {
          session: session || ''
        }
      }
    } catch (error) {
      return {
        props: {
          session: null
        }
      }
    }
  }

  return HocComponent;

};

