/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Address, AddressMapType } from '../../interfaces/address';
import { cepExp, cepSymbolsExp } from '../../utils/expressions';
import AddressList from '../../Components/AddressList';
import FieldError from '../../Components/FieldError';
import { emptyAdres } from '../../utils/address';
import Button from '../../Components/Button';
import useFetch from '../../Hooks/useFetch';
import Field from '../../Components/Field';
import useLocalSore from '../../Hooks/useLocalStore';

function Home() {
  const [cepData, setCepData] = useState<Address>(emptyAdres);
  const [cepInput, setCepInput] = useState<string>('');
  const [myAddresses, setMyAddresses] = useState<AddressMapType>(new Map());
  const [isInvalidInput, setIsInvalidInput] = useState<boolean>(false);
  const [selectedCep, setSelectedCep] = useState<string>('');
  const [requestParams, setRequestParams] = useState({ method: 'GET' });
  const { response, error } = useFetch(requestParams);
  useLocalSore(myAddresses, setMyAddresses);

  const updateCep = async (cep: string) => {
    const cepFromCache = myAddresses.get(cep);
    if (cepFromCache) {
      console.log('CEP em cache:', cepFromCache);
      setCepData(cepFromCache);
      return;
    }
    setRequestParams(prev => ({ ...prev, url: `${cep}/json/` }));
  };

  const isValidCep = (cep: string) => {
    if (cep.length !== 8) return false;
    if (!cep.match(cepExp)) return false;
    return true;
  };

  function saveAddress() {
    setMyAddresses(
      prev => new Map(prev.set(cepInput.replace(cepSymbolsExp, ''), cepData)),
    );
  }

  useEffect(() => {
    setCepData(response);
  }, [response]);

  useEffect(() => {
    setCepData({ ...emptyAdres, cep: cepInput });
  }, [error]);

  useEffect(() => {
    if (!cepInput) return;
    const cep = cepInput.replace(cepSymbolsExp, '');
    if (isValidCep(cep)) updateCep(cep);
    else {
      setIsInvalidInput(true);
      setCepData(emptyAdres);
    }
  }, [cepInput]);

  return (
    <div className="flex flex-col justify-between items-center w-screen min-h-screen px-3 md:px-0">
      <main className="w-full max-w-md md:max-w-3xl">
        <div className="mt-14">
          <h1 className="mb-14 cursor-default text-center text-4xl md:text-5xl">
            Address Finder
          </h1>
          <form
            action=""
            method="get"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[400px] sm:max-w-[820px] w-full gap-x-14 gap-y-8"
          >
            <div className="relative">
              {isInvalidInput && <FieldError>* O CEP contém erros</FieldError>}
              <Field
                labelText="CEP"
                onBlur={event => setCepInput(event.target.value)}
                onChange={() => isInvalidInput && setIsInvalidInput(false)}
                type="text"
                placeholder="xxxxx-xxx"
              />
            </div>

            <Field
              labelText="RUA"
              value={cepData?.logradouro}
              onChange={e =>
                setCepData(prev => ({ ...prev, logradouro: e.target.value }))
              }
            />
            <Field
              labelText="BAIRRO"
              value={cepData?.bairro}
              onChange={e =>
                setCepData(prev => ({ ...prev, bairro: e.target.value }))
              }
            />
            <Field
              labelText="CIDADE"
              value={cepData?.localidade}
              onChange={e =>
                setCepData(prev => ({ ...prev, localidade: e.target.value }))
              }
            />
            <Field
              labelText="ESTADO"
              value={cepData?.estado}
              onChange={e =>
                setCepData(prev => ({ ...prev, estado: e.target.value }))
              }
            />

            <div className="relative mt-20 md:mt-0">
              <Button onClick={saveAddress} className="bottom-0 absolute">
                Salvar Endereço
              </Button>
            </div>
          </form>

          <AddressList
            myAddresses={myAddresses}
            setSelectedCep={setSelectedCep}
            selectedCep={selectedCep}
          />
        </div>
      </main>

      <footer className="mt-14 mb-3">❤️ Made by marcosChalet</footer>
    </div>
  );
}

export default Home;
