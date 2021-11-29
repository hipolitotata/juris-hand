import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {handleSignature, toogleModal} from '../../store/actions';
import {VALID_SIGNATURE} from '../../constants';

import ModalSubscribe from '../modal-subscribe';
import updateImage from '../../assets/update-arrows.png';
import styles from './styles';
import { IStoreState } from '../../store/reducers';

export default function MainSubscribe() {
  const dispatch = useDispatch();

  const {signature} = useSelector((state: IStoreState) => state.signatureReducer);

  useEffect(() => {
    getSignature();

    async function getSignature() {
      const signature = await AsyncStorage.getItem('@signature');
      if (signature === VALID_SIGNATURE) {
        dispatch(handleSignature(true));
      }
    }
  }, []);

  function handleModal() {
    dispatch(toogleModal());
  }

  return (
    <View style={styles.container}>
      {signature ? (
        <Text style={styles.containerTitle}>Parabéns pela assinatura</Text>
      ) : (
        <>
          <Text style={styles.containerTitle}>Configurações</Text>

          <TouchableOpacity onPress={handleModal} style={styles.mainSection}>
            <Image style={styles.refreshImage} source={updateImage} />
            <Text style={styles.upgradeText}>Faça upgrade agora</Text>
          </TouchableOpacity>
        </>
      )}

      <ModalSubscribe onCloseModal={handleModal} />
    </View>
  );
}
