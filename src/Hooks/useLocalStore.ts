/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { AddressMapType } from '../interfaces/address';

function useLocalSore(
  myAddresses: AddressMapType,
  setMyAddresses: (p: AddressMapType) => void,
) {
  function saveLocalStorageAddress() {
    localStorage.setItem(
      '@AGSistemasAddressProject',
      JSON.stringify([...myAddresses]),
    );
  }

  useEffect(() => {
    const storedData = localStorage.getItem('@AGSistemasAddressProject');
    if (!storedData) return;

    try {
      const parsedData = JSON.parse(storedData);
      if (!Array.isArray(parsedData)) return;

      const addresses: AddressMapType = new Map(parsedData);
      setMyAddresses(addresses);
    } catch (error) {
      console.log(error);
    }

    const addresses: AddressMapType = new Map(
      JSON.parse(localStorage.getItem('@AGSistemasAddressProject') ?? ''),
    );
    setMyAddresses(addresses);
  }, []);

  useEffect(() => {
    if (!myAddresses.size) return;
    saveLocalStorageAddress();
  }, [myAddresses]);
}
export default useLocalSore;
