"use client";

import propTypes from 'prop-types';
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import { children,  } from 'react';
import AuthHeader from './AuthHeader';
import BackButton from './BackButton';

const CardWrapper = ({ label, title, backButtonHref, backButtonlabel, children }) => {
  return (
    <Card className="xl:w-1/4 md:w-1/2 shadow-md">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton label={backButtonlabel} href={backButtonHref}/>
      </CardFooter>
        
    </Card>
  )
};

CardWrapper.propTypes = {
  label: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  backButtonHref: propTypes.string.isRequired,
  backButtonlabel: propTypes.string.isRequired,
  children: propTypes.node,
};

export default CardWrapper;