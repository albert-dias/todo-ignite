import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header:{
    backgroundColor: '#0d0d0d',
    height: 175,
    alignItems: "center",
    justifyContent: "center"
  },
  contentInput:{
    padding: 24,
    flexDirection: "row",
    marginTop: -54,
    alignItems: "center"
  },
  input:{
    height: 54,
    flex: 1,
    marginRight: 4,
    backgroundColor: '#262626',
    borderRadius:6, 
    borderWidth: 1, 
    color: '#f2f2f2',
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter_400Regular"
  },
  button:{
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius:6,
  },
  icon:{
    color: "#f2f2f2",
    fontSize: 20
  },
  content:{
    flex: 1,
    paddingHorizontal: 24,
  },
  rowInfo:{
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  info:{
    flexDirection: "row",
    alignItems: "center"
  },
  textInfo:{
    fontFamily: "Inter_700Bold",
    marginRight: 8
  },
  badge:{
    paddingHorizontal:8,
    paddingVertical: 2,
    backgroundColor: "#333333", 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  textBadge:{
    fontFamily: "Inter_700Bold",
    color: "#f2f2f2",
  },
  emptyList:{
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },
  title:{color: "#808080", marginTop:16, fontSize: 14, fontFamily: "Inter_700Bold",},
  subtitle:{color: "#808080", marginTop:8, fontSize: 14, fontFamily: "Inter_400Regular",}
})