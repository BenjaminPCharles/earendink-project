import { IllustrationScreen } from '@/components/IllustrationScreen/IllustrationScreen';
import { FlexBox } from '@/shared/components/flexbox/Flexbox';
import React from 'react';


export default function Page() {
  return (
      <FlexBox styleProps={{ margin: 20 }} wrap view>
        <IllustrationScreen />
     </FlexBox>
  )
}
