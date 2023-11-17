import { Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';

export interface cardProps {
  description: string;
  checked: boolean;
  id: number;
}

interface data {
  item: cardProps;
  handleDelete: (id: number) => void;
  handleCheck: (id: number) => void;
}

export function Card({ item, handleCheck, handleDelete }: data) {
  return (
    <View key={item.id} style={styles.container}>
      <TouchableOpacity onPress={() => handleCheck(item.id)}>
        <Feather
          name={item.checked ? 'check-circle' : 'circle'}
          style={[styles.icon, { color: item.checked ? '#5E60CE' : '#4EA8DE' }]}
        />
      </TouchableOpacity>
      <Text style={styles.text} numberOfLines={2}>
        {item.description}
      </Text>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Feather style={styles.icon} name="trash-2" />
      </TouchableOpacity>
    </View>
  );
}
