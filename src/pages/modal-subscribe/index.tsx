import React from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import Modal from 'react-native-modal';

import jobsImage from '../../assets/jobs.png';
import closeImage from '../../assets/close.png';
import backImage from '../../assets/back.png';

import styles from './styles';
import {handleSignature} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {VALID_SIGNATURE} from '../../constants';
import {IStoreState} from '../../store/reducers';

interface IModalProps {
  onCloseModal: () => void;
}

export default function ModalSubscribe({onCloseModal}: IModalProps) {
  const dispatch = useDispatch();

  const {isVisible} = useSelector(
    (state: IStoreState) => state.signatureReducer,
  );

  async function addSignature() {
    await AsyncStorage.setItem('@signature', VALID_SIGNATURE);
    dispatch(handleSignature(true));
    onCloseModal();
  }

  return (
    <Modal style={styles.modalStyle} isVisible={isVisible}>

      <SafeAreaView style={styles.container}>

        <TouchableOpacity onPress={onCloseModal} style={styles.backImage}>
          <Image source={backImage} />
        </TouchableOpacity>

        <View style={styles.mainSection}>
          <TouchableOpacity style={styles.closeImage} onPress={onCloseModal}>
            <Image source={closeImage} />
          </TouchableOpacity>

          <Text style={styles.titleText}>
            Faça upgrade no JurisHand e seja feliz
          </Text>
          <Image style={styles.imageContainer} source={jobsImage} />
          <Text style={styles.labelSubscribeText}>
            Assine por{' '}
            <Text style={styles.textSubscribe}>R$299,00 por ano</Text> {'\n'}
            (R$ 24,99 por mês)
          </Text>

          <TouchableOpacity
            style={styles.buttonSubscribe}
            onPress={addSignature}>
            <Text style={styles.buttonSubscribeText}>Assine agora</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textSignatureWarn}>
          Você será cobrado imediatamente. Sem período trial.
        </Text>

      </SafeAreaView>
    </Modal>
  );
}
