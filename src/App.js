import './App.css';

function App() {
  return (

    <div className="container">
      <form class="row g-3">
        <div class="col-6">
          <div class="col-md-6">

            <label for="inputEmail4" class="form-label">E-mail:</label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>

         <div class="col-md-7">
            <label for="inputPassword4" class="form-label">mot de passe: donner mot de passe entre 4 et 8 caractères:</label>
            <input type="password" class="form-control" id="inputPassword4" required
              minlength="4" maxlength="8" size="10" />
          </div>
          <div>
            <label for="phone" >Téléphone: donner numéro de téléphone d'un opérateur tunisien:</label>
            <input type="tel" id="phone" name="phone" class="form-control"
              pattern="[0-9]{2}-[0-9]{3}-[0-9]{3}" required />
            <small>Format: 12-345-678</small>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-dark">S'inscrire</button>
          </div>
        </div>








        <div class="col-6">


          <div class="col-14">
            <label for="inputAddress" class="form-label">Addresse1</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="123 rue ..." />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">Addresse2</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="123 rue ..." />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">Cité:</label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">Gouvernorat</label>
            <select name="states" id="inputState" class="form-label">
              <option value="">--SVP: choisir une option--</option>
              <option value="Ariana">Ariana</option>
              <option value="Beja">Beja</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Bizerte">Bizerte</option>
              <option value="Gabes">Gabes</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Jendouba">Jendouba</option>
              <option value="Kairouan">Kairouan</option>
              <option value="Kebilli">Kebilli</option>
              <option value="Kef">Kef</option>
              <option value="Mehdia">Mehdia</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Tozeur">Tozeur</option>
              <option value="Tunis">Tunis</option>
              <option value="Manouba">Zaghouan</option>
            </select>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Vérifier les info
      </label>
            </div>
          </div>
          



        </div>


      </form>
    </div>



  );
}

export default App;
