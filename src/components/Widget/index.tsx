import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { ChatTeardropDots } from 'phosphor-react-native'
import { theme } from '../../theme';
import BottomSheet from '@gorhom/bottom-sheet'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { feedbackTypes } from '../../utils/feedbackTypes';

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const BottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    BottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots 
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>
      
      <BottomSheet
          ref={BottomSheetRef}
          snapPoints={[1, 280]}
          backgroundStyle={styles.modal}
          handleIndicatorStyle={styles.indicator}
        >
          <Success 
          />
        </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);