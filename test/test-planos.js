const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()
chai.use(chaiHttp)

// resolve um warning
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

// server
const server = require('../index')

// plano e mock
const Plano = require('../models/planos')
const mock = {
	"disciplina": "engenharia de software",
	"ementa": "ementa",
	"descricao": "descricao",
	"referencias": "referencias"
}

// user e login
const User = require('../models/users')
const agent = chai.request.agent(server)
const user = {
	username: 'test',
	password: 'test'
}

before((done) => {
	agent
		.post('/login')
		.set("content-type", "application/x-www-form-urlencoded")
		.send(user)
		.then((res) => {
			done()
		})
		.catch((err) => {
			done(err)
		})
})

// bateria
describe('Planos', () => {
	
	// index
	it('deve mostrar index, todos os planos, em /planos/index (GET)', (done) => {
		chai.request(server)
			.get('/planos/index')
			.end((err, res) => {
				res.should.have.status(200)
				res.should.be.html
				done()
			})
	})

	// new
	it('deve mostrar tela de criacao de planos em /planos (GET)', (done) => {
		chai.request(server)
			.get('/planos')
			.end((err, res) => {
				res.should.have.status(200)
				res.should.be.html
				done()
			})
	})

	// create
	it('deve criar um plano como o mock em /planos (POST)', (done) => {
		chai.request(server)
			.post('/planos')
			.send(mock)
			.end((err, res) => {
				res.should.have.status(200)
				.res.should.be.html
				done()
			})
	})

	// show
	it('deve mostrar o plano mock em /planos/id (GET)', (done) => {
		var plano = new Plano(mock)
		plano.save((err, data) => {
			chai.request(server)
				.get('/planos/${data._id}')
				.end((err, res) => {
					res.should.have.status(200)
					res.should.be.html
					done()
				})
		})
	})

	// edit
	it('deve editar o plano mock em /planos/id/edit (GET)', (done) => {
		var plano = new Plano(mock)
		plano.save((err, data) => {
			chai.request(server)
				.get('/planos/${data._id}/edit')
				.end((err, res) => {
					res.should.have.status(200)
					res.should.be.html
					done()
				})
		})
	})

	// update
    it('deve atualizar o plano mock em /planos/id (PUT)', (done) => {
        var plano = new Plano(mock)
        plano.save((err, data) => {
            chai.request(server)
                .put('/planos/${data._id}?_method=PUT')
                .send({'disciplina': 'test 2'})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.html
                    done()
                })
        })
    })

	// delete
    it('deve deletar o plano mock em /planos/id (DELETE)', (done) => {
        var plano = new Plano(mock)
        plano.save((err, data) => {
            chai.request(server)
                .delete('/planos/${data._id}?_method=DELETE')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.should.be.html
                    done()
                })
        })
    })

    // apaga user test e copias de mocks criados
	after((done) => {
		Plano.deleteMany(mock, (err, planos) => {})
			.then((res) => {
				agent.close()
				User.findOneAndDelete({
					username: user.username
				})
					.then(function (res) {
						done()
					})
					.catch(function (err) {
						done(err)
					})
			})
			.catch(function (err) {
				done(err)
			})
	})

})
