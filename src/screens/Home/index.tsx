import {
  Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';

import logo from '../../../assets/logo.png';
import clipboard from '../../../assets/Clipboard.png';

import { useCallback, useMemo, useState } from 'react';
import { Card, cardProps } from '../../components/Card';

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<cardProps[]>([]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(inputValue !== '');
  }, [inputValue]);

  const handleAddItem = useCallback(() => {
    setList([
      ...list,
      { description: inputValue, id: new Date().getTime(), checked: false },
    ]);
    setIsFocused(false);
    setInputValue('');
  }, [inputValue, list]);

  const checkeds = useMemo(() => {
    return list.reduce((acc, item) => {
      return item.checked ? acc + 1 : acc;
    }, 0);
  }, [list]);

  const handleDeleteItem = useCallback(
    (id: number) => {
      Alert.alert(
        'Atenção!!',
        'Esta ação não pode ser revertida, deseja mesmo excluir esse registro?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return;
            },
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              const newList = list.filter((item) => item.id !== id);
              setList(newList);
            },
          },
        ]
      );
    },
    [list]
  );

  const handleAction = useCallback(
    (id: number) => {
      const newList = list.map((item) => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      });
      setList(newList);
    },
    [list]
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image source={logo} />
      </View>
      <View style={styles.contentInput}>
        <TextInput
          style={[
            styles.input,
            { borderColor: isFocused || isFilled ? '#5E60CE' : '#0d0d0d' },
          ]}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Feather name="plus-circle" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.rowInfo}>
          <View style={styles.info}>
            <Text style={[styles.textInfo, { color: '#4EA8DE' }]}>Criadas</Text>
            <View style={styles.badge}>
              <Text style={styles.textBadge}>{list.length}</Text>
            </View>
          </View>
          <View style={styles.info}>
            <Text style={[styles.textInfo, { color: '#8284FA' }]}>
              Concluídas
            </Text>
            <View style={styles.badge}>
              <Text style={styles.textBadge}>{checkeds}</Text>
            </View>
          </View>
        </View>
        {list.length === 0 ? (
          <View style={styles.emptyList}>
            <Image source={clipboard} />
            <Text style={styles.title}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.subtitle}>
              Crie tarefas e organize seu itens a fazer
            </Text>
          </View>
        ) : (
          list.map((item) => (
            <Card
              item={item}
              handleCheck={handleAction}
              handleDelete={handleDeleteItem}
            />
          ))
        )}
      </View>
    </View>
  );
}
