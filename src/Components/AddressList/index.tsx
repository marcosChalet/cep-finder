import accordeonToggle from '../../assets/angles-down-solid.svg';
import { AddressMapType } from '../../interfaces/address';

function AddressList({
  myAddresses,
  setSelectedCep,
  selectedCep,
}: {
  myAddresses: AddressMapType;
  selectedCep: string;
  setSelectedCep: (value: React.SetStateAction<string>) => void;
}) {
  return (
    myAddresses.size > 0 && (
      <div className="mt-16">
        <h3 className="text-2xl md:text-3xl text-center my-4">
          ENDEREÇOS SALVOS
        </h3>
        <div className="overflow-auto">
          <ul className="flex flex-col gap-4 min-w-[300px] ">
            {Array.from(myAddresses.entries()).map(([key, address]) => {
              return (
                <div key={key}>
                  <li
                    onClick={() => setSelectedCep(p => (p === key ? '' : key))}
                    className="flex justify-between items-center w-full bg-neutral-900 py-3 px-2 rounded-sm cursor-pointer hover:bg-black duration-500"
                  >
                    <p>
                      {address.cep} | {address.logradouro}
                    </p>
                    <img className="w-4 h-4" src={accordeonToggle} />
                  </li>

                  <div
                    className={`mb-5 mt-2 ${selectedCep === key ? '' : 'hidden'}`}
                  >
                    {Object.entries(myAddresses.get(selectedCep) ?? {})
                      .filter(item => item[1])
                      .map((item, idx: number) => (
                        <div
                          key={item[0]}
                          className={`flex justify-between items-center h-12 px-2 ${idx % 2 === 0 ? 'bg-neutral-950' : 'bg-neutral-900'}`}
                        >
                          <p className="uppercase">{item[0]}</p>
                          <p>{item[1] ? item[1] : '-'}</p>
                        </div>
                      ))}
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    )
  );
}

export default AddressList;
