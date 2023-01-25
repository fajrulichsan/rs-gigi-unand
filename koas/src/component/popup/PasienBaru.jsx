import React, { Fragment } from 'react'

const PasienBaru = () => {
  return (
    <Fragment>
      <div className='bg-white rounded-lg p-5 w-80 lg:w-[40em] lg:p-12 h-[40em] lg:h-[50em] overflow-auto'>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Lengkap</label>
          <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identitas</label>
          <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Pilih</option>
            <option value="US">KTP</option>
            <option value="CA">SIM</option>
            <option value="FR">Pasport</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Identitas</label>
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status Pasien</label>
          <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Pilih</option>
            <option value="US">Umum</option>
            <option value="CA">UNAND</option>
            <option value="CA">FKG UNAND</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tempat Lahir</label>
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal Lahir</label>
          <input type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jenis Kelamin</label>
          <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Pilih</option>
            <option value="US">Laki-Laki</option>
            <option value="CA">Perempuan</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nomor Handphone</label>
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pekerjaan</label>
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gologan Darah</label>
          <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Pilih</option>
            <option value="US">A</option>
            <option value="CA">B</option>
            <option value="CA">O</option>
            <option value="CA">AB</option>
          </select>
        </div>
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status Pernikahan</label>
          <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Pilih</option>
            <option value="US">Belum Menikah</option>
            <option value="CA">Menikah</option>
          </select>
        </div> 
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Agama</label>
          <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Pilih</option>
            <option value="US">Islam</option>
            <option value="CA">Kristen</option>
            <option value="CA">Khatolik</option>
            <option value="CA">Hindu</option>
            <option value="CA">Budha</option>
          </select>
        </div> 
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pendidikan</label>
            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Pilih</option>
              <option value="US">SD</option>
              <option value="CA">SMP</option>
              <option value="CA">SMA</option>
              <option value="CA">S1</option>
              <option value="CA">S2</option>
              <option value="CA">S3</option>
            </select>
        </div> 
        <div className='mb-6'>
          <label for="small" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Warga Negara</label>
            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Pilih</option>
              <option value="US">WNI</option>
              <option value="CA">WNA</option>
            </select>
        </div>
        <div className='mb-6'>
          
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  

      </div>
    </Fragment>
  )
}

export default PasienBaru;