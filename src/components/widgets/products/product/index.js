import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import { MoreVert as More } from '@material-ui/icons';

import { Currency } from 'components/widgets';

import withStyle from './style';

export const Product = ({ className, description, image, name, price }) => (
  <div className={className}>
    <Card>
      <CardHeader
        action={
          <IconButton>
            <More />
          </IconButton>
        }
        title={name}
        subheader={<Currency value={price} />}
      />
      <CardMedia image={image} title={name} />
      <CardContent>{description}</CardContent>
    </Card>
  </div>
);

export default withStyle(Product);
