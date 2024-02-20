import { FlashScreen } from '@/components/FlashScreen/FlashScreen';
import { FlexBox } from '@/shared/components/flexbox/Flexbox';
import React from 'react';


export default function Page() {
  return (
    <FlexBox styleProps={{ margin: 20 }} wrap view>
       <FlashScreen />
    </FlexBox>
  )
}

